import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
	return (
		<footer className="bg-gray-800 text-white">
			<div className="max-w-6xl mx-auot px-4 py-8">
				{/* Infor */}
				<div className="grid grid-col-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
					{/* Compnay Name */}
					<div>
						<h3 className="text-xl pb-2">Dayo Prince</h3>
						<p>Lorem ipsum dolor sit amet leniti laboriosam ipsa aut. Unde consectetur optio corru </p>
					</div>
					{/* Links */}
					<div>
						<h3 className="text-xl pb-2">Quic Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-200 hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-200 hover:text-white">
									About
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-200 hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Socials Media Hanldes */}
					<div>
						<h3 className="text-xl pb-2">Follow Me</h3>
						<div className="flex flex-col gap-2">
							<a
								href="facebook.com/dayo/fsl"
								className="text-gray-200 hover:text-white flex items-center gap-2">
								<BsFacebook /> Facebook
							</a>
							<a href="#" className="text-gray-200 hover:text-white flex items-center gap-2">
								<BsInstagram /> Intagram
							</a>
							<a href="#" className="text-gray-200 hover:text-white flex items-center gap-2">
								<BsTwitter /> Twitter
							</a>
							<a href="#" className="text-gray-200 hover:text-white flex items-center gap-2">
								<BsYoutube /> Youtube
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl pb-2">Get in Touch</h3>
						<p>info@dayo.com</p>
						<p>09012345678</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-300">
					<p>&copy; All Rights reserver 2024. Dayo Limited</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
