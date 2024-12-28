export interface Config {
  title: string;
  description: string;
  about_me: string;
  social: {
    github: string;
    twitter: string;
  };
  comments: CommentConfig;
}

export interface CommentConfig {
  enabled: boolean;
  repo: `${string}/${string}`;
  repo_id: string;
  category: string;
  category_id: string;
  mapping: 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname';
  input_position: 'top' | 'bottom';
  lang: string;
  reactions_enabled: '0' | '1';
}

export interface UseThemeProps {
  theme?: string;
  changeTheme(theme: string): void;
}
