import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import EmojiFoodBeverageRoundedIcon from '@material-ui/icons/EmojiFoodBeverageRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ContactMailRoundedIcon />
      </ListItemIcon>
      <ListItemText primary='Home' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ImportContactsRoundedIcon />
      </ListItemIcon>
      <ListItemText primary='Projects' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiFoodBeverageRoundedIcon />
      </ListItemIcon>
      <ListItemText primary='Resume' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessibilityNewRoundedIcon />
      </ListItemIcon>
      <ListItemText primary='Contact' />
    </ListItem>

    <ListItem button></ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LinkedInIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItem>
  </div>
);
