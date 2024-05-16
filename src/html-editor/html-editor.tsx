import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import type { HtmlEditorProps } from './types';

// Добавление глобальной переменной tinymce
import 'tinymce/tinymce';
import 'tinymce/models/dom/model';
// Тема
import 'tinymce/themes/silver';
// иконки тулбара
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// импорт плагинов
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';
// Стили контента, включая встроенный пользовательский интерфейс, например, фальшивые курсоры
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

const DEFAULT_HTML_EDITOR_PLUGINS: HtmlEditorProps['plugins'] = [
    'advlist',
    'anchor',
    'autolink',
    'charmap',
    'code',
    'directionality',
    'fullscreen',
    'image',
    'insertdatetime',
    'link',
    'lists',
    'media',
    'nonbreaking',
    'pagebreak',
    'preview',
    'save',
    'searchreplace',
    'table',
    'visualblocks',
    'visualchars',
    'wordcount',
];

const DEFAULT_TOOLBAR: HtmlEditorProps['toolbar'] = [
    'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    'print preview fullscreen media | forecolor backcolor',
];

const DEFAULT_INIT_OPTIONS: HtmlEditorProps['init'] = {
    branding: false,
    theme: 'silver',
    fullpage_default_doctype: '<!DOCTYPE xhtml>',
    image_advtab: true,
    menubar: false,
};

export const HtmlEditor = (props: HtmlEditorProps) => (
    <Editor
        licenseKey="gpl"
        plugins={ DEFAULT_HTML_EDITOR_PLUGINS }
        toolbar={ DEFAULT_TOOLBAR }
        { ...props }
        init={ {
            ...DEFAULT_INIT_OPTIONS,
            ...props.init,
        } }
    />
);
