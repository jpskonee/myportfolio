import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const SocialMediaIcons = (props) => {
  const { linkedIn, gitHub, facebook, twitter } = props;
  return (
    <div>
      <List>
        <a href="https://www.linkedin.com/in/agho-dev/" target="blank">
          <ListItem>
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText> {linkedIn}</ListItemText>
          </ListItem>
        </a>
        <a href="https://github.com/jpskonee/" target="blank">
          <ListItem>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText> {gitHub}</ListItemText>
          </ListItem>
        </a>
        <a href="https://www.facebook.com/wapemma" target="blank">
          <ListItem>
            <ListItemIcon>
              <Facebook />
            </ListItemIcon>
            <ListItemText> {facebook}</ListItemText>
          </ListItem>
        </a>
        <a href="https://www.twitter.com/Agho_Dev?s=09" target="blank">
          <ListItem>
            <ListItemIcon>
              <Twitter />
            </ListItemIcon>
            <ListItemText> {twitter}</ListItemText>
          </ListItem>
        </a>
      </List>
    </div>
  );
};

export default SocialMediaIcons;
