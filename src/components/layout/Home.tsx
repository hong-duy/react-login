import React from 'react';
import Menu from '../Menu';
import '../../App.css';
import '../../styles/Items.scss';
import { useState, useEffect } from "react";

interface Provider {
	id: number;
	thumbnail: string;
	title: string;
	views: number;
	published_at: string;
	description: string;
	slug: string
}

export default function Home() {
	let [items, setItems] = useState<Provider[]>([]);
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		async function fetchAnime() {
			const res = await fetch(`https://tinanime.com/api/news/?offset=${offset}&limit=8`);
			const animes = await res.json();
			// const current = [...items, ...json];
			// setItems(current);
			setItems(prevAnimes => [...prevAnimes, ...animes]);
		}

		fetchAnime();
	}, [offset]); // ✅

	const loadMore = async () => {
		setOffset(offset + 8);
	}

	return (
		<>
			<Menu />
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
				<div className="mb-50"><button onClick={loadMore} className="btn-load-more">Xem thêm</button></div>
			</div>
		</>
	)
}
