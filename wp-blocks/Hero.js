import React from 'react';
import { gql } from '@apollo/client';
// import { Block } from "@/interfaces/blocks";

// import '@/styles/blocks/hero/hero.scss';


Hero.displayName = 'InteractivestrategiesHero';


export default function Hero(props/*: { block: HeroBlock }*/) {

	return <pre>
		{ JSON.stringify(props, null, 2) }
	</pre>;



	// return (
		// <pre>
		// 	{JSON.stringify(block, null, 2)}
		// </pre>
	// )

}

// CoreButton.fragments = {
//     key: `CoreButtonBlockFragment`,
//     entry: gql `
//     fragment CoreButtonBlockFragment on CoreButton {

Hero.fragments = {
	key: `InteractivestrategiesHeroFragment`,
	entry: gql`
	fragment InteractivestrategiesHeroFragment on WithAcfBlockHero {
		blockHero {
			title
		}
	}
	`,
  };

