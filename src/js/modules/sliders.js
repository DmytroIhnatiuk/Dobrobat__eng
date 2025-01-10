import Swiper from 'swiper'
import {
	Autoplay,
	Navigation,
	Pagination,
	EffectFade,
	EffectCards,
	Grid,
} from 'swiper/modules'
import { getElement, getElements } from '../core/index.js'

function ukrainianBusinesses() {
	if (!getElement('[data-swiper="ukrainianBusinesses"]')) return
	new Swiper('[data-swiper="ukrainianBusinesses"]', {
		modules: [Navigation],
		spaceBetween: 32,
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
		},

		navigation: {
			nextEl: '.businesses-prev',
			prevEl: '.businesses-next',
		},
	})
}
function results() {
	if (!getElement('[data-swiper="results"]')) return
	new Swiper('[data-swiper="results"]', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: '.result-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.results-next',
			prevEl: '.results-prev',
		},
	})
}

function internationalLegion() {
	if (!getElement('[data-swiper="internationalLegion"]')) return
	new Swiper('[data-swiper="internationalLegion"]', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		loop: true,

		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		pagination: {
			el: '.volunteers-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.volunteers-next',
			prevEl: '.volunteers-prev',
		},
	})
}

function news() {
	if (!getElement('[data-swiper="news"]')) return
	new Swiper('[data-swiper="news"]', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		loop: true,
		spaceBetween: 24,

		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		pagination: {
			el: '.news-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.news-next',
			prevEl: '.news-prev',
		},
	})
}
function partnersCards() {
	if (!getElement('[data-swiper="partnersCards"]')) return
	new Swiper('[data-swiper="partnersCards"]', {
		modules: [Navigation, Pagination, EffectCards],
		effect: 'cards',
		grabCursor: true,
		speed: 1000,
		pagination: {
			el: '.partnersFlip-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.partnersFlip-next',
			prevEl: '.partnersFlip-prev',
		},
	})
}
function members() {
	if (!getElement('[data-swiper="members"]')) return
	new Swiper('[data-swiper="members"]', {
		modules: [Navigation, Pagination, EffectFade],
		pagination: {
			el: '.members-pagination',
			type: 'fraction',
			crossFade: true,
		},
		effect: 'fade',

		navigation: {
			nextEl: '.members-next',
			prevEl: '.members-prev',
		},
	})
}

export {
	ukrainianBusinesses,
	results,
	internationalLegion,
	news,
	partnersCards,
	members,
}
