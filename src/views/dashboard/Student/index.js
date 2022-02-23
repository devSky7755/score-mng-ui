import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import { Tabs, Tab, Box, Grid, Typography } from '@mui/material';

// project imports
import StudentService from 'services/student.service';
import StudentScore from './Score';
import StudentList from './StudentList';
import { SET_STUDENTS } from 'store/actions';

// ==============================|| Student DASHBOARD ||============================== //

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
};

const StudentDashboard = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student);

    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        StudentService.getStudents()
            .then(res => {
                dispatch({
                    type: SET_STUDENTS,
                    students: res.data
                });
            });
    }, []);

    const tabItems = student.students.map((item, index) => {
        return (
            <Tab label={item.name} {...a11yProps(index)} key={index} />
        );
    });

    const avgScore = student.students.reduce((a, b) => {
        return parseInt(a) + parseInt(b.score)
    }, 0) / student.students.length;

    const panelItems = student.students.map((item, index) => {
        return (
            <StudentList value={value} index={index} key={index}>
                <StudentScore score={item.score} studentId={item.id} />
            </StudentList>
        );
    });


    return (
        <>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '0.3' }}
                >
                    {tabItems}
                </Tabs>
                {panelItems}
            </Box>
            <Grid container justifyContent="center" sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', p: 1.5 }}>
                <Typography variant="h3" color="secondary">
                    average: {avgScore || ''}
                </Typography>
            </Grid>
        </>
    );
};

export default StudentDashboard;
