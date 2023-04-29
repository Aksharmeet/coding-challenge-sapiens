import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Routes from './Routes'

const client = new ApolloClient({
	uri: `https://apidev4.sapien.systems/graphql`,
	cache: new InMemoryCache(),
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Routes />
		</ApolloProvider>
	)
}

export default App
