// Боковое меню на страницах настроек для навигации по настройкам
import NavigationHandlers from '../../GeneralComponents/NavigationHandlers';

const SettingsMenu = ({ activePage }) => {
    const {
        goToSettingsHandler,
        goToDetectionSettingsHandler,
        goToFaceRecognitionSettingsPageHandler,
        goToAdditionalSettingsHandler,
        goToStreamsSettingsHandler,
    } = NavigationHandlers();

    return (
        <div className="choose-settings-container">
            <button
                className={
                    activePage === 'settings'
                        ? 'selected-button'
                        : 'choose-settings-button'
                }
                onClick={goToSettingsHandler}
            >
                Камеры
            </button>
            <button
                className={
                    activePage === 'streams'
                        ? 'selected-button'
                        : 'choose-settings-button'
                }
                onClick={goToStreamsSettingsHandler}
            >
                Видеопотоки
            </button>
            <button
                className={
                    activePage === 'detection'
                        ? 'selected-button'
                        : 'choose-settings-button'
                }
                onClick={goToDetectionSettingsHandler}
            >
                Детекция
            </button>
            <button
                className={
                    activePage === 'recognition'
                        ? 'selected-button'
                        : 'choose-settings-button'
                }
                onClick={goToFaceRecognitionSettingsPageHandler}
            >
                Распознавание лиц
            </button>
            <button
                className={
                    activePage === 'additional'
                        ? 'selected-button'
                        : 'choose-settings-button'
                }
                onClick={goToAdditionalSettingsHandler}
            >
                Дополнительно
            </button>
        </div>
    );
};

export default SettingsMenu;
