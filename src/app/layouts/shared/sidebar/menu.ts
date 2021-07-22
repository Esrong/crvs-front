
import { Role } from 'src/app/core/models/role';
import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: '',
        isTitle: true,
     
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/'
    },
    {
        id: 14,
        label: 'MENUITEMS.REGISTRATION.TEXT',
        icon: 'fas fa-edit',
        subItems: [
            {
                id: 15,
                label: 'MENUITEMS.REGISTRATION.LIST.BIRTH',
                link: '/registration/birth',
                parentId: 14
            },
            {
                id: 16,
                label: 'MENUITEMS.REGISTRATION.LIST.DEATH',
                link: '/registration/death',
                parentId: 14
            },
            {
                id: 17,
                label: 'MENUITEMS.REGISTRATION.LIST.MARRIAGE',
                link: '/registration/marriage',
                parentId: 14,
    
            },
            {
                id: 18,
                label: 'MENUITEMS.REGISTRATION.LIST.DIVORCE',
                link: '/registration/divorce',
                icon: 'fas fa-edit',
                parentId: 14
            }
        ]
    },
    {
        id: 18,
        label: 'MENUITEMS.CERTIFICATE.TEXT',
        icon: 'fas fa-certificate',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.CERTIFICATE.LIST.BIRTH',
                link: '/certificate/birthc',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.CERTIFICATE.LIST.DEATH',
                link: '/certificate/deathc',
                parentId: 18
            },
            {
                id: 21,
                label: 'MENUITEMS.CERTIFICATE.LIST.MARRIAGE',
                link: '/certificate/marriagec',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.CERTIFICATE.LIST.DIVORCE',
                link: '/certificate/divorcec',
                parentId: 18
            }
        ]
    },
    {
        id: 23,
        label: 'MENUITEMS.STATISTICS.TEXT',
        icon: '  ri-bar-chart-fill',
        subItems: [
            {
                id: 24,
                label: 'MENUITEMS.STATISTICS.LIST.BIRTH',
                link: '/statistics/births',
                parentId: 23
            },
            {
                id: 25,
                label: 'MENUITEMS.STATISTICS.LIST.DEATH',
                link: '/statistics/deaths',
                parentId: 23
            },
            {
                id: 26,
                label: 'MENUITEMS.STATISTICS.LIST.MARRIAGE',
                link: '/statistics/marriages',
                parentId: 23
            },
            {
                id: 27,
                label: 'MENUITEMS.STATISTICS.LIST.DEVORCE',
                link: '/statistics/divorces',
                parentId: 23
            }
            
        ]
    },
    {
        id: 28,
        label: 'MENUITEMS.ACCOUNT-MANAGER.TEXT',
        icon: 'ri-account-circle-line',
        
        subItems: [
            {
                id: 29,
                label: 'MENUITEMS.ACCOUNT-MANAGER.LIST.CREATE',
                link: '/account-manager/create-account',
                parentId: 28
            },
            {
                id: 30,
                label: 'MENUITEMS.ACCOUNT-MANAGER.LIST.EDIT',
                link: '/account-manager/edit-account',              
                parentId: 28
            },
            {
                id: 31,
                label: 'MENUITEMS.ACCOUNT-MANAGER.LIST.LIST',
                link: '/account-manager/list-account',
                parentId: 28
            },
            {
                id: 32,
                label: 'MENUITEMS.ACCOUNT-MANAGER.LIST.PROFILE',
                link: '/account-manager/profile-detail',
                parentId: 28
            },
            {
                id: 33,
                label: 'MENUITEMS.ACCOUNT-MANAGER.LIST.PROFILE-E',
                link: '/account-manager/profile-edit',
                parentId: 28
            }
        ]
    },
    {
        id: 33,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    
];
