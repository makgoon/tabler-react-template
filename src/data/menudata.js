import { 
    IconHome, 
    IconPackage, 
    IconCheckbox, 
    IconStar, 
    IconLayout2, 
    IconPuzzle, 
    IconGift, 
    IconLifebuoy,
    IconSettings,
    IconHeart
  } from '@tabler/icons-react'

  export const menuItems = [
    {
      type: 'simple',
      id: 'home',
      href: './',
      icon: IconHome,
      title: 'Home',
      active: true,
      dropdown: false
    },
    {
        type: 'simple',
        id: 'interface',
        href: '#',
        icon: IconPackage,
        title: 'Interface',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'accordion',
                href: '#',
                title: 'Accordion',
                dropdown: false,
                badge: 'New'
            },
            {
                id: 'authentication',
                href: '#',
                title: 'Authentication',
                dropdown: true,
                badge: 'New',
                children: [
                    {
                        id: 'sign-in',
                        href: '#',
                        title: 'Sign In',
                        badge: 'New'
                    },
                    {
                        id: 'sign-up',
                        href: '#',
                        title: 'Sign Up',
                        badge: ''
                    },
                    {
                        id: 'sign-in-link',
                        href: '#',
                        title: 'Sign In Link',
                        badge: ''
                    },
                    {
                        id: 'sign-in-illustration',
                        href: '#',
                        title: 'Sign In Illustration',
                        badge: ''
                    },
                    {
                        id: 'sign-in-cover',
                        href: '#',
                        title: 'Sign In Cover',
                        badge: ''
                    },
                    {
                        id: 'forgot-password',
                        href: '#',
                        title: 'Forgot Password',
                        badge: ''
                    },
                    {
                        id: 'terms-of-service',
                        href: '#',
                        title: 'Terms of Service',
                        badge: ''
                    },
                    {
                        id: 'auth-lock',
                        href: '#',
                        title: 'Auth Lock',
                        badge: ''
                    },
                    {
                        id: '2-step-verification',
                        href: '#',
                        title: '2 Step Verification',
                        badge: ''
                    },
                    {
                        id: '2-step-verification-code',
                        href: '#',
                        title: '2 Step Verification Code',
                        badge: ''
                    },
                ]
            },
            {
                id: 'avatars',
                href: '#',
                title: 'Avatars',
                dropdown: false,
                badge: ''
            },
            {
                id: 'badges',
                href: '#',
                title: 'Badges',
                dropdown: false,
                badge: ''
            },
            {
                id: 'blank',
                href: '#',
                title: 'Blank',
                dropdown: false,
                badge: ''
            },
            {
                id: 'buttons',
                href: '#',
                title: 'Buttons',
                dropdown: false,
                badge: ''
            },
            {
                id: 'cards',
                href: '#',
                title: 'Cards',
                badge: '',
                dropdown:true,
                children: [
                    {
                        id: 'sample-cards',
                        href: '#',
                        title: 'Sample Cards',
                        badge: ''
                    },
                    {
                        id: 'card-actions',
                        href: '#',
                        title: 'Card Actions',
                        badge: ''
                    }
                ]
            },
            {
                id: 'carousel',
                href: '#',
                title: 'Corousel',
                dropdown: false,
                badge: ''
            },
            {
                id: 'colors',
                href: '#',
                title: 'Colors',
                dropdown: false,
                badge: ''
            },
            {
                id: 'datagrid',
                href: '#',
                title: 'Data Grid',
                dropdown: false,
                badge: ''
            },
            {
                id: 'dropdowns',
                href: '#',
                title: 'Dropdowns',
                dropdown: false,
                badge: ''
            },
            {
                id: 'error-pages',
                href: '#',
                title: 'Error Pages',
                dropdown: true,
                badge: '',
                children: [
                    {
                        id: 'error-404',
                        href: '#',
                        title: '404 Page',
                        badge: ''
                    },
                    {
                        id: 'error-500',
                        href: '#',
                        title: '500 Page',
                        badge: ''
                    },
                    {
                        id: 'error-maintenance',
                        href: '#',
                        title: 'Maintenance Page',
                        badge: ''
                    }
                ]
            },
            {
                id: 'lists',
                href: '#',
                title: 'Lists',
                dropdown: false,
                badge: ''
            },
            {
                id: 'modals',
                href: '#',
                title: 'Modals',
                dropdown: false,
                badge: ''
            },
            {
                id: 'markdown',
                href: '#',
                title: 'Markdown',
                dropdown: false,
                badge: ''
            },
            {
                id: 'navigation',
                href: '#',
                title: 'Navigation',
                dropdown: false,
                badge: ''
            },
            {
                id: 'offcanvas',
                href: '#',
                title: 'Offcanvas',
                dropdown: false,
                badge: ''
            },
            {
                id: 'pagination',
                href: '#',
                title: 'Pagination',
                dropdown: false,
                badge: ''
            },
            {
                id: 'placeholder',
                href: '#',
                title: 'Placeholder',
                dropdown: false,
                badge: ''
            },
            {
                id: 'segmented-control',
                href: '#',
                title: 'Segmented Control',
                dropdown: false,
                badge: ''
            },
            {
                id: 'scroll-spy',
                href: '#',
                title: 'Scroll Spy',
                dropdown: false,
                badge: ''
            },
            {
                id: 'social-icons',
                href: '#',
                title: 'Social Icons',
                dropdown: false,
                badge: ''
            },
            {
                id: 'stars-rating',
                href: '#',
                title: 'Stars Rating',
                dropdown: false,
                badge: ''
            },
            {
                id: 'steps',
                href: '#',
                title: 'Steps',
                dropdown: false,
                badge: ''
            },
            {
                id: 'tables',
                href: '#',
                title: 'Tables',
                dropdown: false,
                badge: ''
            },
            {
                id: 'tabs',
                href: '#',
                title: 'Tabs',
                dropdown: false,
                badge: ''
            },
            {
                id: 'tags',
                href: '#',
                title: 'Tags',
                dropdown: false,
                badge: ''
            },
            {
                id: 'toasts',
                href: '#',
                title: 'Toasts',
                dropdown: false,
                badge: ''
            },
            {
                id: 'typography',
                href: '#',
                title: 'Typography',
                dropdown: false,
                badge: ''
            },
        ]
      },
      {
        type: 'simple',
        id: 'forms',
        href: '#',
        icon: IconCheckbox,
        title: 'Forms',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'form-elements',
                href: '#',
                title: 'Form Elements',
                dropdown: false,
                badge: ''
            },
            {
                id: 'form-layout',
                href: '#',
                title: 'Form Layout',
                dropdown: false,
                badge: ''
            },
        ]
      },
      {
        type: 'simple',
        id: 'extra',
        href: './',
        icon: IconStar,
        title: 'Extra',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'activity',
                href: '#',
                title: 'Activity',
                dropdown: false,
                badge: ''
            },
            {
                id: 'chat',
                href: '#',
                title: 'Chat',
                dropdown: false,
                badge: ''
            },
            {
                id: 'cookie-banner',
                href: '#',
                title: 'Cookie banner',
                dropdown: false,
                badge: ''
            },
            {
                id: 'empty-page',
                href: '#',
                title: 'Empty page',
                dropdown: false,
                badge: ''
            },
            {
                id: 'faq',
                href: '#',
                title: 'FAQ',
                dropdown: false,
                badge: ''
            },
            {
                id: 'gallery',
                href: '#',
                title: 'Gallery',
                dropdown: false,
                badge: ''
            },
            {
                id: 'invoice',
                href: '#',
                title: 'Invoice',
                dropdown: false,
                badge: ''
            },
            {
                id: 'job-listing',
                href: '#',
                title: 'Job Listing',
                dropdown: false,
                badge: ''
            },
            {
                id: 'license',
                href: '#',
                title: 'License',
                dropdown: false,
                badge: ''
            },
            {
                id: 'logs',
                href: '#',
                title: 'Logs',
                dropdown: false,
                badge: ''
            },
            {
                id: 'marketing',
                href: '#',
                title: 'Marketing',
                dropdown: false,
                badge: ''
            },
            {
                id: 'music',
                href: '#',
                title: 'Music',
                dropdown: false,
                badge: ''
            },
            {
                id: 'page-loader',
                href: '#',
                title: 'Page Loader',
                dropdown: false,
                badge: ''
            },
            {
                id: 'photogrid',
                href: '#',
                title: 'Photogrid',
                dropdown: false,
                badge: ''
            },
            {
                id: 'pricing-cards',
                href: '#',
                title: 'Pricing Cards',
                dropdown: false,
                badge: ''
            },
            {
                id: 'pricing-table',
                href: '#',
                title: 'Pricing Table',
                dropdown: false,
                badge: ''
            },
            {
                id: 'search-results',
                href: '#',
                title: 'Search Results',
                dropdown: false,
                badge: ''
            },
            {
                id: 'settings',
                href: '#',
                title: 'Settings',
                dropdown: false,
                badge: ''
            },
            {
                id: 'signatures',
                href: '#',
                title: 'Signatures',
                dropdown: false,
                badge: ''
            },
            {
                id: 'tasks',
                href: '#',
                title: 'Tasks',
                dropdown: false,
                badge: ''
            },
            {
                id: 'text-features',
                href: '#',
                title: 'Text Features',
                dropdown: false,
                badge: ''
            },
            {
                id: 'trial-ended',
                href: '#',
                title: 'Trial Ended',
                dropdown: false,
                badge: ''
            },
            {
                id: 'uptime-monitor',
                href: '#',
                title: 'Uptime Monitor',
                dropdown: false,
                badge: ''
            },
            {
                id: 'users',
                href: '#',
                title: 'Users',
                dropdown: false,
                badge: ''
            },
            {
                id: 'widgets',
                href: '#',
                title: 'Widgets',
                dropdown: false,
                badge: ''
            },
            {
                id: 'wizard',
                href: '#',
                title: 'Wizard',
                dropdown: false,
                badge: ''
            },
        ]
      },
      {
        type: 'simple',
        id: 'layout',
        href: './',
        icon: IconStar,
        title: 'Layout',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'layout-boxed   ',
                href: '#',
                title: 'Boxed',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-combo',
                href: '#',
                title: 'Combined',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-condensed',
                href: '#',
                title: 'Condensed',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-fluid',
                href: '#',
                title: 'Fluid',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-fluid-vertical',
                href: '#',
                title: 'Fluid Vertical',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-horizontal',
                href: '#',
                title: 'Horizontal',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-navbar-dark',
                href: '#',
                title: 'Navbar Dark',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-navbar-overlap',
                href: '#',
                title: 'Navbar Overlap',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-navbar-sticky',
                href: '#',
                title: 'Navbar Sticky',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-vertical-right',
                href: '#',
                title: 'Right Vertical',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-rtl',
                href: '#',
                title: 'RTL Mode',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-vertical',
                href: '#',
                title: 'Vertical',
                dropdown: false,
                badge: ''
            },
            {
                id: 'layout-vertical-transparent',
                href: '#',
                title: 'Vertical Transparent',
                dropdown: false,
                badge: ''
            },
                
        ],
      },
      {
        type: 'simple',
        id: 'plugins',
        href: './',
        icon: IconPuzzle,
        title: 'Plugins',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'charts',
                href: '#',
                title: 'Charts',
                dropdown: false,
                badge: ''
            },
            {
                id: 'color-picker',
                href: '#',
                title: 'Color picker',
                dropdown: false,
                badge: ''
            },
            {
                id: 'datatables',
                href: '#',
                title: 'Datatables',
                dropdown: false,
                badge: ''
            },
            {
                id: 'dropzone',
                href: '#',
                title: 'Dropzone',
                dropdown: false,
                badge: ''
            },
            {
                id: 'fullcalendar',
                href: '#',
                title: 'Fullcalendar',
                dropdown: false,
                badge: ''
            },
            {
                id: 'inline-player',
                href: '#',
                title: 'Inline Player',
                dropdown: false,
                badge: ''
            },
            {
                id: 'lightbox',
                href: '#',
                title: 'Lightbox',
                dropdown: false,
                badge: ''
            },
            {
                id: 'maps',
                href: '#',
                title: 'Map',
                dropdown: false,
                badge: ''
            },
            {
                id: 'map-fullsize',
                href: '#',
                title: 'Map Fullsize',
                dropdown: false,
                badge: ''
            },
            {
                id: 'maps-vector',
                href: '#',
                title: 'Map Vector',
                dropdown: false,
                badge: ''
            },
            {
                id: 'turbo-loader',
                href: '#',
                title: 'Turbo Loader',
                dropdown: false,
                badge: ''
            },
            {
                id: 'wysiwyg',
                href: '#',
                title: 'WYSIWYG Editor',
                dropdown: false,
                badge: ''
            },
        ]       
      },
      {
        type: 'simple',
        id: 'addons',
        href: './',
        icon: IconGift,
        title: 'Addons',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'icons',
                href: '#',
                title: 'Icons',
                dropdown: false,
                badge: ''
            },
            {
                id: 'emails',
                href: '#',
                title: 'Emails',
                dropdown: false,
                badge: ''
            },
            {
                id: 'flags',
                href: '#',
                title: 'Flags',
                dropdown: false,
                badge: ''
            },
            {
                id: 'illustrations',
                href: '#',
                title: 'Illustrations',
                dropdown: false,
                badge: ''
            },
            {
                id: 'payment-providers',
                href: '#',
                title: 'Payment Providers',
                dropdown: false,
                badge: ''
            },
        ]    
      },
      {
        type: 'simple',
        id: 'help',
        href: './',
        icon: IconLifebuoy,
        title: 'Help',
        active: false,
        dropdown: true,
        children: [
            {
                id: 'documentation',
                href: '#',
                title: 'Documentation',
                dropdown: false,
                badge: ''
            },
            {
                id: 'changelog',
                href: '#',
                title: 'Changelog',
                dropdown: false,
                badge: ''
            },
            {
                id: 'source-code',
                href: '#',
                title: 'Source Code',
                dropdown: false,
                badge: ''
            },
        ]
      },
    ]