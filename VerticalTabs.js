import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="General Information" {...a11yProps(0)} />
        <Tab label="Allocation" {...a11yProps(1)} />
        <Tab label="Payment" {...a11yProps(2)} />
        <Tab label="Cost/Fee" {...a11yProps(3)} />
        <Tab label="Interest" {...a11yProps(4)} />
        <Tab label="Memos" {...a11yProps(5)} />
        <Tab label="Documents" {...a11yProps(6)} />
        <Tab label="Financials" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h4" component="h2">
          General Information
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h4" component="h2">
          Allocation
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h4" component="h2">
          Payment
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h4" component="h2">
          Cost/Fee
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography variant="h4" component="h2">
          Interest
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography variant="h4" component="h2">
          Memos
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography variant="h4" component="h2">
          Documents
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Typography variant="h4" component="h2">
          Financials
        </Typography>
      </TabPanel>
    </div>
  );
}
