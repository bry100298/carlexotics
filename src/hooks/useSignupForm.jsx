// import { ISignupFormDetails } from '@/models';
import { UseFormReturnType, useForm } from '@mantine/form';

export const useSignupForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            terms: true,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
            password: (val) =>
                val.length < 6 ? 'Password should include at least 6 characters' : null,
            confirmPassword: (val, { password }) =>
                val !== password ? 'Passwords do not match' : null,
            terms: (terms) =>
                !terms ? 'You need to accept terms and conditions' : null,
        },
    });

    return form;
};