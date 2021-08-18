import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboards/saas',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/dashboards/crypto',
                parentId: 2
            },
        ]
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 8,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 9,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.CHAT.BADGE',
        },
    },
    {
        id: 10,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'bx-store',
        subItems: [
            {
                id: 11,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/ecommerce/products',
                parentId: 10
            },
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/ecommerce/orders',
                parentId: 10
            },
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/ecommerce/customers',
                parentId: 10
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/ecommerce/cart',
                parentId: 10
            },
            {
                id: 16,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/ecommerce/checkout',
                parentId: 10
            },
            {
                id: 17,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/ecommerce/shops',
                parentId: 10
            },
            {
                id: 18,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/ecommerce/add-product',
                parentId: 10
            },
        ]
    },
    {
        id: 19,
        label: 'MENUITEMS.CRYPTO.TEXT',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 20,
                label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                link: '/crypto/wallet',
                parentId: 19
            },
            {
                id: 21,
                label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                link: '/crypto/buy-sell',
                parentId: 19
            },
            {
                id: 22,
                label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                link: '/crypto/exchange',
                parentId: 19
            },
            {
                id: 23,
                label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                link: '/crypto/lending',
                parentId: 19
            },
            {
                id: 24,
                label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                link: '/crypto/orders',
                parentId: 19
            },
            {
                id: 25,
                label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                link: '/crypto/kyc-application',
                parentId: 19
            },
            {
                id: 26,
                label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                link: '/crypto-ico-landing',
                parentId: 19
            }
        ]
    },
    {
        id: 27,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 28,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 27
            },
            {
                id: 29,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read',
                parentId: 27
            }
        ]
    },
    {
        id: 30,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 31,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/invoices/list',
                parentId: 30
            },
            {
                id: 32,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/invoices/detail',
                parentId: 30
            },
        ]
    },
    {
        id: 33,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 34,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/projects/grid',
                parentId: 33
            },
            {
                id: 35,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/projects/list',
                parentId: 33
            },
            {
                id: 36,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/projects/overview',
                parentId: 33
            },
            {
                id: 37,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/projects/create',
                parentId: 33
            }
        ]
    },
    {
        id: 38,
        label: 'MENUITEMS.TASKS.TEXT',
        icon: 'bx-task',
        subItems: [
            {
                id: 39,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/tasks/list',
                parentId: 38
            },
            {
                id: 40,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/tasks/kanban',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                link: '/tasks/create',
                parentId: 38
            }
        ]
    },
    {
        id: 42,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 43,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/contacts/grid',
                parentId: 42
            },
            {
                id: 44,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/contacts/list',
                parentId: 42
            },
            {
                id: 45,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/contacts/profile',
                parentId: 42
            }
        ]
    },
    {
        id: 46,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 47,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 48,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/pages/login-1',
                parentId: 47
            },
            {
                id: 49,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/pages/register-1',
                parentId: 47
            },
            {
                id: 50,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/pages/recoverpwd-1',
                parentId: 47
            },
            {
                id: 51,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 47
            }
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 52
            },
            {
                id: 56,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 52
            },
            {
                id: 57,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 52
            },
            {
                id: 58,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 52
            },
            {
                id: 59,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 52
            },
        ]
    },
    {
        id: 60,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 61,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 62,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 61
            },
            {
                id: 63,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 61
            },
            {
                id: 64,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 61
            },
            {
                id: 65,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 61
            },
            {
                id: 66,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 61
            },
            {
                id: 67,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 61
            },
            {
                id: 68,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 61
            },
            {
                id: 69,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 61
            },
            {
                id: 70,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 61
            },
            {
                id: 71,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 61
            },
            {
                id: 72,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 61
            },
            {
                id: 73,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 61
            },
            {
                id: 74,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 61
            },
            {
                id: 75,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 61
            },
            {
                id: 76,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 61
            },
            {
                id: 77,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 61
            },
            {
                id: 78,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/ui/image-crop',
                parentId: 61
            },
        ]
    },
    {
        id: 79,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        subItems: [
            {
                id: 80,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 79
            },
            {
                id: 81,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 79
            },
            {
                id: 82,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 79
            },
            {
                id: 83,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 79
            },
            {
                id: 84,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 79
            },
            {
                id: 85,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/form/repeater',
                parentId: 79
            },
            {
                id: 86,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 79
            },
            {
                id: 87,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 79
            }
        ]
    },
    {
        id: 88,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 89,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 88
            },
            {
                id: 90,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: '/tables/advanced',
                parentId: 88
            }
        ]
    },
    {
        id: 91,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 92,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/charts/apex',
                parentId: 91
            },
            {
                id: 93,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/charts/chartjs',
                parentId: 91
            },
            {
                id: 94,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/charts/chartist',
                parentId: 91
            },
            {
                id: 95,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/charts/echart',
                parentId: 91
            }
        ]
    },
    {
        id: 96,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 97,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 96
            },
            {
                id: 98,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 96
            },
            {
                id: 99,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 96
            },
            {
                id: 100,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 96
            },
        ]
    },
    {
        id: 101,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        subItems: [
            {
                id: 102,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 101
            }
        ]
    },
    {
        id: 103,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 104,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                link: 'javascript: void(0);',
                parentId: 103
            },
            {
                id: 105,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 103,
                subItems: [
                    {
                        id: 106,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        link: 'javascript: void(0);',
                        parentId: 105,
                    },
                    {
                        id: 107,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        link: 'javascript: void(0);',
                        parentId: 105,
                    }
                ]
            },
        ]
    }
];

