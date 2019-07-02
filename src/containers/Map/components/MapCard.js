import React from "react";
// import { Item, Button } from "semantic-ui-react";
import ListItem from '@material-ui/core/ListItem';
const MapCard = (props) => {

	const { dr } = props;

	const handleClick = (e) => {
		props.toggleShowPage(dr)
	}

	return (
		// <Item>
		// 	<Item.Image
		// 		src={dr.image_url}
		// 		size="tiny"
		// 		/>
		// 	<Item.Content>
		// 		<Item.Header >
		// 			<strong>
		// 				Dr. {dr.name}
		// 			</strong>
		// 		</Item.Header>
		// 		<Item.Meta>
				
		// 			<br />
		// 			<br />
		// 		</Item.Meta>
		// 		<Button onClick={handleClick}>See Profile</Button>
		// 	</Item.Content>
        // </Item>
        <div>
            Arpit
        </div>
	);
}

export default MapCard;