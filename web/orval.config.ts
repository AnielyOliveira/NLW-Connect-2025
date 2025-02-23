import { defineConfig } from 'orval'

export default defineConfig({
    // aqui damos o nome que quisermos
    api: {
        // a URL onde está a documetação do swagger (passando o json)
        input: 'http://localhost:3333/docs/json',
        output: {
            target: './src/http/api.ts', // arquivo que vai ser gerado de forma automatica com base na documentação. E gerar dentro desse caminho
            client: 'fetch', // nativa
            httpClient: 'fetch',
		clean: true, // Quando esse arquivo for gerado ele irá apagar o anterior (evitando conflitos)
		baseUrl: 'http://localhost:3333', // URL do nosso back-end

		override: {
			// Pegando só os dados
			fetch: {
				includeHttpResponseReturnType: false
			}
		}
        },
    },
})
