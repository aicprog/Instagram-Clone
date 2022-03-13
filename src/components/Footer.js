import React from 'react';
import { footerLinks } from '../constants/data/footer.js';


const Footer = () => {
	let topLinks = footerLinks[0].top.links;
	let bottomLinks = footerLinks[0].bottom.links;

	return (
		<div className="flex flex-col justify-flex items-center text-gray-500 mt-10">
			<div className="flex gap-x-6 gap-y-3 flex-wrap items-center justify-center">
				{topLinks.map((link) => (
					<a href="/">
						<p className="text-xs">{link}</p>
					</a>
				))}
			</div>
			<div className="flex gap-6 mt-5 mb-5 ">
				{bottomLinks.map((link, index) => (
					<a href="/" key={index}>
						<p className="text-xs ">{link}</p>
					</a>
				))}
			</div>
			<div>
				<select
					name="language"
					id="language"
					className="mr-3 text-xxs bg-transparent"
				>
					<option value="English">English</option>
					<option value="EnglishUK">English(UK)</option>
					<option value="Spanish">Spanish</option>
					<option value="French">French</option>
					<option value="Italian">Italiano</option>
					<option value="German">German</option>
				</select>
				<span className="text-xxs">
					&copy; {new Date().getFullYear()} Instagram from Meta
				</span>
			</div>
		</div>
	);
};

export default Footer;

