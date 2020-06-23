export interface Forecast {
    daily: [
        {
            temp: {
                day: number,
                min: number,
                max: number,
                night: number,
            },
            weather: [
                {
                    id: number,
                    main: string,
                    escription: string,
                    icon: number
                }
            ]
        }
    ]
}