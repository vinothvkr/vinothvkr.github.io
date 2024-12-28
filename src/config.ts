import fs from 'fs';
import { parse as yamlParse } from 'yaml';
import { Config } from '@/types';

const configParser = () => {
  const file = fs.readFileSync(process.cwd() + '/app.config.yml', 'utf8');
  return yamlParse(file) as Config;
};

export const config = configParser();
