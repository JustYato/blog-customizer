import { createRoot } from 'react-dom/client';
import { StrictMode, useState, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

interface customStyles extends CSSProperties {
	'--font-family': string;
	'--font-size': string;
	'--font-color': string;
	'--container-width': string;
	'--bg-color': string;
}

const RootComponent = () => {
	const [articleSettings, updateArticleSettings] =
		useState(defaultArticleState);

	const customStyles: customStyles = {
		'--font-family': articleSettings.fontFamilyOption.value,
		'--font-size': articleSettings.fontSizeOption.value,
		'--font-color': articleSettings.fontColor.value,
		'--container-width': articleSettings.contentWidth.value,
		'--bg-color': articleSettings.backgroundColor.value,
	};

	return (
		<div className={clsx(styles.main)} style={customStyles}>
			<ArticleParamsForm
				currentArticleState={articleSettings}
				setCurrentArticleState={updateArticleSettings}
			/>
			<Article />
		</div>
	);
};

const domElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domElement);

root.render(
	<StrictMode>
		<RootComponent />
	</StrictMode>
);
