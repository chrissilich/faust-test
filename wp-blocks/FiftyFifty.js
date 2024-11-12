import React from 'react';
import { gql } from '@apollo/client';
// import { Block } from "@/interfaces/blocks";
// import CmsImage from "@/components/partials/CmsImage";
// import AnchorButton from "@/components/partials/AnchorButton";

// import '@/styles/blocks/fifty-fifty/fifty-fifty.scss';

// interface FiftyFiftyBlock extends Block {
// 	fields: {
// 		imageSide: string,
// 		image: any,
// 		eyebrow: string,
// 		title: string,
// 		text: string,
// 		button: any,
// 	}
// }

FiftyFifty.displayName = 'InteractivestrategiesFiftyFiftyBlock';


export default function FiftyFifty( props ) {

	// console.log("fifty fifty props", props);

	return <pre>
		{ JSON.stringify(props, null, 2) }
	</pre>;



	// return (
		// <pre>
		// 	{JSON.stringify(block, null, 2)}
		// </pre>
	// )

	const fields = block.fields;

	return (
		<section
			id={block.attrs.anchor ? block.attrs.anchor : ''}
			className="fifty-fifty-block"
			data-image-side={fields.imageSide}
		>

			<div className="fifty-fifty-block-inner">

				{/* Image */}
				<div className="fifty-fifty-block-image">
					{/* <CmsImage image={fields.image} /> */}
				</div>

				{/* Content  */}
				<div className="fifty-fifty-block-content wysiwyg-text">

					{/* Optional Eyebrow  */}
					{fields.eyebrow && (
						<div className="fifty-fifty-block-eyebrow -eyebrow">{fields.eyebrow}</div>
					)}

					{/* Title */}
					<h2 className="fifty-fifty-block-title">{fields.title}</h2>

					{/* Optional Text */}
					{fields.text && (
						<div className="fifty-fifty-block-text" dangerouslySetInnerHTML={{ __html: fields.text }}>
						</div>
					)}

					{/* Optional Button */}
					{fields.button && (
						<div className="fifty-fifty-block-buttons">
							{/* <AnchorButton link={fields.button} classes={['button']} /> */}
						</div>
					)}

				</div>

			</div>
		</section>
	)
}



FiftyFifty.fragments = {
	key: `FiftyFiftyBlockFragment`,
	entry: gql`
	fragment FiftyFiftyBlockFragment on WithAcfBlockFiftyFifty {
		blockFiftyFifty {
			eyebrow
			title
			text
			hasButton
			button {
				linkText
				linkType
				linkUrlAnchor
				linkUrlExternal
				linkYoutubeId
			}
			imageSide
			media
			youtubeId
		}
	}
	`,
  };

