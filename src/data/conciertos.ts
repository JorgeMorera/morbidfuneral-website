export interface Concierto {
    dia: number ;
    mes: string ;
    anio: number ;
    lugar: string;
    provincia: string;
    bandas: string[];
}

export const chivos: Concierto[] =[
    { 
        dia: 18 ,
        mes: 'Noviembre' ,
        anio: 2023 ,
        lugar: 'Bar Starview',
        provincia: 'San José',
        bandas: [
            ' Ereshxigal, ' ,
            ' Negatio Fidei, ',
            ' Warhead Barbarism, ',
            ' Corpus Necromantum ',
        ],
    },
    {
        dia:  0,
        mes: 'Febrero' ,
        anio: 2024 ,
        lugar: 'C.Club Valle Guarco',
        provincia: 'Cartago',
        bandas: [
            'Manifiesto, ' ,
            'Sentido Comun, ',
            'Vigor ',
            
        ],

    },

]