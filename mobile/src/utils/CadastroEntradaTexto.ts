const secoes = [
    {
        id: 1,
        titulo: 'Insira alguns dados básicos',
        inputCheck: [],
        inputTexto: [
            { id: 1, label: 'nome', placeholder: 'Digite seu nome completo' },
            { id: 2, label: 'email', placeholder: 'Digite seu email' },         
            { id: 3, label: 'Crie uma senha', placeholder: 'insira a sua senha' },
            { id: 4, label: 'Repita a senha', placeholder: 'insira a sua senha' },
        ]
    },
    {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você',
        inputCheck: [],
        inputTexto: [
            { id: 1, label: 'CEP', placeholder: 'Digite seu cep do seu domicilio' },
            { id: 2, label: 'Endereço', placeholder: 'Insira seu endereço' },                
            { id: 3, label: 'numero', placeholder: 'insira o numero ' },
            { id: 4, label: 'Complemento', placeholder: 'insira o seu complemento' },
            { id: 5, label: 'Telefone', placeholder: '(00) 00000-0000' },
        ]
    },
    {
        id: 3,
        titulo: 'Para finaliza, qual seu plano de saúde?',
        inputTexto: [],
        inputCheck: [
            { id: 1, value: 'santa Casa', placeholder: 'Digite seu cep do seu domicilio' },
            { id: 2, value: 'unimed', placeholder: 'Insira seu endereço' },                
            // { id: 3, label: 'numero', placeholder: 'insira o numero ' },
            // { id: 4, label: 'Complemento', placeholder: 'insira o seu complemento' },
            // { id: 5, label: 'Telefone', placeholder: '(00) 00000-0000' },
        ]
    },
]

export { secoes } ;