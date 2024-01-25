import { config } from '../config/config';
export function useOpenai() {
  const { serverUrl } = config;
  const openaiUrl = `${serverUrl}/openai`;
  const getModels = async () => {
    try {
      const models = await fetch(`${openaiUrl}/models`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return models.json();
    } catch (error) {
      console.log('Well, something went wrong with getModels', error);
      return;
    }
  };

  return { getModels };
}
