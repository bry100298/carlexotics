import { useForm } from '@mantine/form';

export const useLoginForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length < 6 ? 'Password should include at least 6 characters' : null,
        },
    });

    return form;
};
