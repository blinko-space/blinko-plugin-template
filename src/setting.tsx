import { useState, useEffect } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

/**
 * Setting component for plugin configuration
 * Handles API token and notification settings
 */
export function Setting(): JSXInternal.Element {
  const [apiToken, setApiToken] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const i18n = window.Blinko.i18n;

  // Fetch initial plugin configuration on component mount
  useEffect(() => {
    window.Blinko.api.config.getPluginConfig.query({
      pluginName: 'my-note-plugin'
    }).then((res: any) => {
      setApiToken(res.apiToken)
    })
  }, []);

  /**
   * Handles saving of plugin settings
   * Saves API token and closes settings panel
   */
  const handleSave = async () => {
    window.Blinko.toast.success(i18n.t('settingsSaved'));
    window.Blinko.closeDialog();
    await window.Blinko.api.config.setPluginConfig.mutate({
      pluginName: 'my-note-plugin',
      key: 'apiToken',
      value: apiToken
    });
    window.Blinko.api.config.getPluginConfig.query({
      pluginName: 'my-note-plugin'
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-2 rounded-lg">
      {/* API Token Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          {i18n.t('apiTokenLabel')}
          <input
            value={apiToken}
            onChange={(e) => setApiToken(e.currentTarget.value)}
            placeholder={i18n.t('enterApiToken')}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm bg-primary!"
          />
        </label>
      </div>

      {/* Notification Settings Section */}
      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.currentTarget.checked)}
            className="h-4 w-4 text-primary-foreground bg-primary rounded"
          />
          <span className="text-sm text-desc">{i18n.t('enableNotifications')}</span>
        </label>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-primary text-primary-foreground"
      >
        {i18n.t('saveSettings')}
      </button>
    </div>
  );
}
