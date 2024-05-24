import { LazyMotion, domMax, m } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function LazyMotionContainer({ children }: Props) {
  return (
    <LazyMotion strict features={domMax}>
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  );
}
