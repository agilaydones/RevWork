interface Tracks{
    show:{
    tracks: {
        href: string,
        items: [
            {
                album: {
                    album_type: string,
                    artists: [
                        {
                            external_urls: {
                                spotify: string
                            },
                            href: string,
                            id: string,
                            name: string,
                            type: string,
                            uri: string
                        }
                    ],
                    available_markets: [],
                    external_urls: {
                        spotify: string
                    },
                    href: string,
                    id: string,
                    
                    name: string,
                    release_date: Date,
                    release_date_precision: string,
                    total_tracks: number,
                    type: string,
                    uri: string
                },
                artists: [
                    {
                        external_urls: {
                            spotify: string
                        },
                        href: string,
                        id: string,
                        name: string,
                        type: string,
                        uri: string
                    }
                ],
                available_markets: [],
                disc_number: number,
                duration_ms: number,
                explicit: boolean,
                external_ids: {
                    isrc: string
                },
                external_urls: {
                    spotify: string
                },
                href: string,
                id: string,
                is_local: boolean,
                name: string,
                popularity: number,
                preview_url: string,
                track_number: number,
                type: string,
                uri: string
            }
        ]
        
    }
}
}