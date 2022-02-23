import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import StudentService from 'services/student.service';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_STUDENTS } from 'store/actions';

const StudentScore = (props) => {
    const { score, studentId } = props;
    const dispatch = useDispatch();

    const theme = useTheme();
    const scriptedRef = useScriptRef();

    const handleSubmit = async (data) => {
        StudentService.updateStudent(data.studentId, data.score)
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SET_STUDENTS,
                        students: res.data.students
                    });
                }
            });
    };

    return (
        <>
            <Formik
                initialValues={{
                    studentId,
                    score
                }}
                validationSchema={Yup.object().shape({
                    score: Yup.number().max(10).min(0).required('Score is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                            handleSubmit(values);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <FormControl fullWidth error={Boolean(touched.score && errors.score)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-score">Score</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-score"
                                type="score"
                                value={values.score}
                                name="score"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="score"
                                inputProps={{}}
                            />
                            {touched.score && errors.score && (
                                <FormHelperText error id="standard-weight-helper-text-score">
                                    {errors.score}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting || !!errors?.score}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Update
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
}


StudentScore.propTypes = {
    score: PropTypes.number.isRequired,
    studentId: PropTypes.number.isRequired,
};

export default StudentScore;
