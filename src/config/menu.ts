import { MenuItem, StatusItemDropdown } from '@/types/common'

export const MENU_DATA: MenuItem[] = [
	{
		id: 1,
		icon:'projects',
		name: 'Проекты',
		url: '/',
		prefix: null,
		color: '#22d337',
		in_project: false
	},
	{
		id: 2,
		icon:'tasks',
		name: 'Задания',
		url: '/project',
		prefix: '',
		color: '#e01f1f',
		in_project: true
	},
	{
		id: 3,
		icon:'users',
		name: 'Участники',
		url: '/users',
		prefix: '',
		color: '#e9e22b',
		in_project: true
	},
	{
		id: 4,
		icon:'link',
		name: 'Полезные ссылки',
		url: '/links',
		prefix: '',
		color: '#94d5eb',
		in_project: true
	},
	{
		id: 5,
		icon:'settings',
		name: 'Профиль',
		url: '/settings',
		prefix: null,
		color: '#d436b2',
		in_project: false
	},
]

export const DROPDOWN_STATUS_MENU: StatusItemDropdown[] = [
	{
		'id': 1,
		'title': 'В разработке',
		'status': 'inProgress',
		'color': '#D8320E'
	},
	{
		'id': 2,
		'title': 'На ревью',
		'status': 'review',
		'color': '#a7a41f'
	},
	{
		'id': 3,
		'title': 'На тестировании',
		'status': 'tested',
		'color': '#4184bb'
	},
	{
		'id': 4,
		'title': 'Завершено',
		'status': 'finished',
		'color': '#22690d'
	},
	{
		'id': 5,
		'title': 'Приостановлено',
		'status': 'blocked',
		'color': '#B22222'
	},
	{
		'id': 6,
		'title': 'Отложено',
		'status': 'deferred',
		'color': '#2E8B57'
	},
	{
		'id': 7,
		'title': 'Отмена',
		'status': 'cancelled',
		'color': '#808000'
	}
]
