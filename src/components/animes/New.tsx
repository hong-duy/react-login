import React from 'react';
import logo from "../../logo.svg";
import '../../styles/Items.scss';
import { useState, useEffect } from "react";
import CONFIG from '../../configs/config';
import { getList } from '../../api/HandleRequest';

interface Provider {
	id: number;
	thumbnail: string;
	title: string;
	views: number;
	published_at: string;
	description: string;
	slug: string
}

export default function New() {
	let [items, setItems] = useState<Provider[]>([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchAnime() {
			const res = await getList(CONFIG.API_NEWS, 8, offset);
			setItems(prevAnimes => [...prevAnimes, ...res.result]);
			setLoading(false);
		}

		fetchAnime();
	}, [offset]); // ✅

	const loadMore = async () => {
		setLoading(true);
		setOffset(offset + 8);
	}

	return (
		<>
			<div className="container">
				<div className="list-items">
					{
						items.map((item: Provider, i: number) =>
							<div className="wrap-item" key={i}>
								<div className="item">
									<div className="item-thumbnail">
										<a href={item.slug}>
											<img src={item.thumbnail} alt={item.title} />
										</a>
									</div>
									<div className="item-title">
										<a href={item.slug}>{item.title}</a>
									</div>
									<div className="item-meta">
										<span className="item-view">{item.views} lượt xem</span>
										<span className="item-publish-date">{item.published_at}</span>
									</div>
									<div className="item-desc">
										<p>{item.description}</p>
									</div>
								</div>
							</div>
						)
					}
				</div>
				<div className="mb-50">
					<button className="btn-load-more" onClick={loadMore}>
						<p>
							<span className="bg" />
							<span className="base" />
							<span className="text">	{isLoading ? <img className="spinner" src={logo} alt="loading icon" /> : "Xem thêm"}</span>
						</p>
					</button>
				</div>
			</div>
		</>
	)
}
