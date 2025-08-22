import Chart from 'react-apexcharts'

function ApexChart({
    // 차트 식별용
    chartId = null,
    
    // 크기/스타일 관련
    height = null,
    size = null,
    className = '',
    
    // 차트 데이터
    data = null
}) {
    
    // ===== PART 1: 크기/스타일 결정 부분 =====
    
    // 원본 로직 그대로: height 계산
    let finalHeight = height || data?.height || 10
    let finalClass = className || ''
    
    // 원본 로직 그대로: size에 따른 클래스와 높이 설정
    if (size === 'sm') {
        finalClass = `${finalClass} chart-sm`.trim()
        finalHeight = 2.5
    } else if (size === 'lg') {
        finalClass = `${finalClass} chart-lg`.trim()
        finalHeight = 15
    }
    
    // 원본 그대로: 컨테이너 클래스 생성
    const containerClasses = `position-relative${finalClass ? ` ${finalClass}` : ''}`
    
    
    // ===== PART 2: 차트 타입 결정 부분 =====
    
    // 원본 로직 그대로: 차트 타입 결정
    const chartType = data?.type || 'bar'
    
    // 시리즈 데이터 추출
    const series = data?.series ? (
        chartType === 'pie' || chartType === 'donut' || chartType === 'radialBar' 
            ? data.series.map(serie => serie.data)
            : data.series.map(serie => ({
                name: serie.name,
                data: serie.data
            }))
    ) : []
    
    // 차트 옵션 설정 (원본 구조 그대로)
    const options = {
        chart: {
            type: chartType,
            fontFamily: 'inherit',
            height: finalHeight * 16, // 원본: {{ height | times: 16 }}
            
            // Sparkline 설정
            ...(data?.sparkline ? {
                sparkline: { enabled: true }
            } : {
                parentHeightOffset: 0,
                toolbar: { show: false }
            }),
            
            // 애니메이션 설정 - 원본 로직 (unless data.animations)
            ...(!data?.animations && {
                animations: { enabled: false }
            }),
            
            // 스택 설정
            ...(data?.stacked && {
                stacked: true
            })
        },
        
        // 차트 타입별 plotOptions
        ...(chartType === 'bar' && {
            plotOptions: {
                bar: {
                    ...(data?.horizontal ? {
                        barHeight: '50%',
                        horizontal: true
                    } : {
                        columnWidth: '50%'
                    })
                }
            }
        }),
        
        ...(chartType === 'radialBar' && {
            plotOptions: {
                radialBar: {
                    startAngle: -120,
                    endAngle: 120,
                    hollow: {
                        margin: 16,
                        size: "50%"
                    },
                    dataLabels: {
                        show: true,
                        value: {
                            offsetY: -8,
                            fontSize: '24px'
                        }
                    }
                }
            }
        }),
        
        // 데이터 라벨 설정
        ...((chartType === 'bar' || chartType === 'area') && {
            dataLabels: {
                enabled: !!data?.datalabels
            }
        }),
        
        // Area 차트 fill 설정 - 원본 그대로
        ...(chartType === 'area' && {
            fill: {
                colors: [
                    `rgba(0, 84, 166, ${chartType === 'area' ? '0.16' : '1'})`,  // area면 16% 투명도
                    `rgba(0, 84, 166, ${chartType === 'area' ? '0.80' : '0.80'})`  // area면 80% 투명도
                ],
                type: 'solid'
            }
        }),
        
        // 제목 설정
        ...(data?.title && {
            title: {
                text: data.title,
                margin: 0,
                floating: true,
                offsetX: 10,
                style: {
                    fontSize: '18px'
                }
            }
        }),
        
        // Stroke 설정 (line, area) - 원본 그대로
        ...((chartType === 'area' || chartType === 'line') && {
            stroke: {
                width: data?.['stroke-width'] ? data['stroke-width'] : 2,
                ...(data?.['stroke-dash'] && {
                    dashArray: data['stroke-dash']
                }),
                lineCap: "round",
                curve: data?.['stroke-curve'] || 'smooth'
            }
        }),
        
        // Labels 설정 (pie, donut, radialBar용)
        ...(data?.series && (chartType === 'pie' || chartType === 'donut' || chartType === 'radialBar') && {
            labels: data.series.map(serie => serie.name)
        }),
        
        // 툴팁 설정 - 기본
        tooltip: {
            theme: 'dark'
        },
        
        // 그리드 설정 - 원본 로직 그대로
        grid: {
            ...(!data?.sparkline && {
                padding: {
                    top: -20,
                    right: 0,
                    left: -4,
                    bottom: -4
                }
            }),
            ...(data?.['hide-grid'] ? {
                show: false
            } : {
                strokeDashArray: 4,
                ...(data?.['show-x'] && {
                    xaxis: {
                        lines: { show: true }
                    }
                })
            })
        },
        
        // show-data-labels 설정 추가
        ...(data?.['show-data-labels'] && {
            dataLabels: {
                enabled: true
            }
        }),
        
        // xaxis 설정 - 원본 그대로
        ...((data?.categories || data?.datetime) && {
            xaxis: {
                labels: {
                    padding: 0,
                    ...(data?.['x-formatter'] && {
                        formatter: function(val) {
                            return data['x-formatter'](val)
                        }
                    })
                },
                tooltip: {
                    enabled: false
                },
                ...((chartType === 'area' || chartType === 'bar') && {
                    axisBorder: {
                        show: false
                    }
                }),
                ...(data?.categories && {
                    categories: data.categories
                }),
                ...(data?.datetime && {
                    type: 'datetime'
                })
            }
        }),
        
        // yaxis 설정 - 원본 그대로
        ...(!(chartType === 'pie' || chartType === 'donut' || chartType === 'radialBar') && {
            yaxis: {
                labels: {
                    padding: 4
                },
                ...(data?.['y-max'] && {
                    max: data['y-max']
                }),
                ...(data?.['y-title'] && {
                    title: {
                        text: data['y-title']
                    }
                })
            }
        }),
        
        // 색상 설정 - 원본 로직 그대로
        ...(data?.series && {
            colors: data.series.map(serie => {
                const color = serie.color || data.color || 'primary'
                const opacity = serie['color-opacity'] || '100%'
                return `color-mix(in srgb, transparent, var(--tblr-${color}) ${opacity})`
            })
        }),
        
        // 범례 설정 - 원본 그대로
        legend: {
            ...(data?.legend ? {
                show: true,
                position: 'bottom',
                offsetY: 12,
                markers: {
                    width: 10,
                    height: 10,
                    radius: 100
                },
                itemMargin: {
                    horizontal: 8,
                    vertical: 8
                }
            } : {
                show: false
            })
        },
        
        // 툴팁 오버라이드 설정 - 원본 그대로
        ...((data?.['hide-tooltip'] || chartType === 'pie' || chartType === 'donut') && {
            tooltip: {
                ...(data?.['hide-tooltip'] && {
                    enabled: false
                }),
                ...((chartType === 'pie' || chartType === 'donut') && {
                    fillSeriesColor: false
                }),
                theme: 'dark'  // 기본 테마 유지
            }
        }),
        
        // 포인트 설정
        ...(data?.['hide-points'] && {
            markers: {
                size: 0
            }
        }),
        
        // 마커 설정
        ...(data?.['show-markers'] && {
            markers: {
                size: 2
            }
        })
    }
    
    // 데이터가 없으면 렌더링하지 않음
    if (!data || !data.series) {
        return null
    }
    
    return (
        <div 
            className={containerClasses}
            style={{ height: `${finalHeight * 16}px` }}
        >
            <Chart
                options={options}
                series={series}
                type={chartType}
                height={finalHeight * 16}
            />
        </div>
    )
}

export default ApexChart

// 사용 예시들 - 더 React스럽게
/*

// 기본 사용
<Chart chartId="sales" data={salesData} />

// 크기 지정
<Chart chartId="visitors" size="sm" data={visitorsData} />
<Chart chartId="revenue" size="lg" data={revenueData} />

// 높이 커스텀
<Chart chartId="analytics" height={6} data={analyticsData} />

// 클래스 추가
<Chart chartId="dashboard" className="custom-chart" data={dashboardData} />

// ApexCharts 지원 차트 타입들
const chartTypes = {
   // 기본 차트
   'line': 'Line Charts - 시간에 따른 변화, 트렌드 분석',
   'area': 'Area Charts - Line + 색칠된 영역, 볼륨/누적 데이터',
   'bar': 'Bar Charts - 카테고리별 비교 (세로/가로)',
   'column': 'Column Charts - Bar chart의 세로 버전',
   
   // 원형 차트
   'pie': 'Pie Charts - 전체 대비 비율',
   'donut': 'Donut Charts - Pie chart 가운데 뚫린 형태',
   'radialBar': 'Radial Bar Charts - 원형 진행률',
   
   // 분석 차트
   'scatter': 'Scatter Charts - 두 변수 간 상관관계',
   'bubble': 'Bubble Charts - 3차원 데이터',
   'heatmap': 'Heatmap - 매트릭스 형태 데이터',
   
   // 전문 차트
   'candlestick': 'Candlestick - 주식 차트',
   'boxPlot': 'Box Plot - 통계 분포',
   'rangeBar': 'Range Bar - 범위를 가진 막대',
   
   // 대시보드 추천: area(매출추이), bar(비교), line(변화), donut(비율), radialBar(KPI)
}

*/
