/** @format */

import { FC } from 'react';

interface TitleProps {
	title?: string;
	subtitle?: string;
	className?: string;
	center?: boolean;
	hidden?: boolean;
	classTitle?:string;
	tag?: keyof JSX.IntrinsicElements;
}

export const Title: FC<TitleProps> = ({
	title,
	subtitle,
	className,
	center,
	hidden,
	classTitle='',
	tag: Tag = 'h2',
}) => {
	const ogText = title
		? title.includes('/')
			? title.split('/')
			: [title]
		: [];
	const hasSlash = ogText.length > 1;

	const Subtag: keyof JSX.IntrinsicElements = Tag === 'h1' ? 'h2' : 'h3';

	return (
		<div className={`${className} ${center && 'text-center'} title-prin`}>
			{subtitle && <Subtag className='title-prin__subtitle'>{subtitle}</Subtag>}

			<Tag
				className={`title-prin__title  ${hidden && 'none'} ${classTitle}`}
			>
				{hasSlash ? (
					<span>
						{ogText[0]}{' '}
						{ogText[1] && (
							<>
								<br />
								<span>{ogText[1]}</span>
							</>
						)}
					</span>
				) : (
					title
				)}
			</Tag>
		</div>
	);
};
