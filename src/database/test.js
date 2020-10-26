const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6555874",
            "Lar dos meninos",
            "Presta assistência à crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
            "997566704",
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha se sentir à vontade e traga muito amor e paciência para dar.",
            "Horário de visitas das 8h às 18h",
            "0"
            );
    `)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})