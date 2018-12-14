<?php

	use UmiCms\Classes\System\Utils\Captcha\Strategies\GoogleRecaptcha;
	use UmiCms\Service;

	/** Расширение php шаблонизатора для шаблона demomarket */
	class AxlabPhpExtension extends ViewPhpExtension {

		/** int максимальное количество товаров в блоке "Лучшие предложения" */
		const MAX_BEST_OFFERS_COUNT = 15;

		/** int максимальное количество товаров в карусели */
		const MAX_CAROUSEL_PRODUCT_COUNT = 12;

		/** int максимальное количество товаров для сравнения */
		const MAX_PRODUCT_COUNT_FOR_COMPARISON = 3;

		// /** @var string путь до картинки "фото временно отсутствует" */
		// private $noPhotoPath = '/templates/demomarket/img/no_photo.jpg';

		/**
		 * Инициализирует общие переменные для шаблонов.
		 * @param array $variables глобальные переменные запроса
		 */
		public function initializeCommonVariables($variables) {
			$templateEngine = $this->getTemplateEngine();
			$templateEngine->setCommonVar('domain', $variables['domain']);
			$templateEngine->setCommonVar('lang', $variables['lang']);
			$templateEngine->setCommonVar('pre_lang', $variables['pre-lang']);
			$templateEngine->setCommonVar('header', isset($variables['header']) ? $this->escape($variables['header']) : '');
			$templateEngine->setCommonVar('request_uri', $variables['request-uri']);
			$templateEngine->setCommonVar('user', $variables['user']);
			$templateEngine->setCommonVar('settings_container', $this->requestSettingsContainer());

		}
		
		
		/**
		 * Запрашивает актуальный объект настроек и возвращает его
		 * @return bool|iUmiObject
		 */
		public function requestSettingsContainer() {
			/** @var umiSettings|UmiSettingsMacros $module */
			$module = cmsController::getInstance()
				->getModule('umiSettings');
			$id = $module->getIdByCustomId('axlab');
			return umiObjectsCollection::getInstance()
				->getObject($id);
		}
		
	}
