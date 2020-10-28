const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    

    //inserir dados na tabela
    await saveOrphanage(db, 
        {
           lat: "-27.222633",
            lng: "-49.6555874",
            name: "Lar dos meninos",
            about: "Presta assistência à crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "994568704",
            images: [
                "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha se sentir à vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas das 8h às 18h",
            open_on_weekends: "0"
        })
        
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
        
    //consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
/*
    //deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
*/
})