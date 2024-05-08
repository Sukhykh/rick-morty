
/*
Episodes page - will include all the episodes from the
episodes API, you should use REST API here, there should be a
pagination implemented. For the UI of the episodes page
you can refer to the IMDB top 250 list, but with pagination.
The list should include the basic info on the episode and if
you click on the list episode it should open a modal window
that will duplicate the episode info from the list and also
show 3 first characters of the episode and there should be
button load more if there are more characters in this
episode. For the image in the list - use any placeholder
image that you think will fit.
*/

import EpisodeList from '@components/EpisodesList/EpisodeList'
import Title from '@components/Title/Title'

const Episodes = () => {
	return (
		<>
			<Title name='Episodes'/>
			<EpisodeList />
		</>
			
	)
}

export default Episodes