import { $currentTag, textChanged, tagAdded } from './model';

$currentTag.on(textChanged, (_, payload) => payload).reset(tagAdded);
