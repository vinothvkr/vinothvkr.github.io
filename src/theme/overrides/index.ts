import { Theme } from '@mui/material/styles';
import Card from './Card';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Card(theme));
}
