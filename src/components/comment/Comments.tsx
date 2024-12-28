'use client';
import { useTheme } from '@/ThemeContext';
import { CommentConfig } from '@/types';
import Giscus from '@giscus/react';

type CommentsProps = {
  config: CommentConfig;
};

export default function Comments({ config }: CommentsProps) {
  const { theme } = useTheme();
  return (
    <>
      {config.enabled && (
        <Giscus
          repo={config.repo}
          repoId={config.repo_id}
          category={config.category}
          categoryId={config.category_id}
          mapping={config.mapping}
          inputPosition={config.input_position}
          lang={config.lang}
          reactionsEnabled={config.reactions_enabled}
          theme={theme}
        />
      )}
    </>
  );
}
