import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Mf522BMldolGarEcUn4XsmcdjUPvz1gu2P3ATld3jnNeNKdAIFuxdeg9f6Zk1o4V29f8D11Ns7g8dwuzyzp1beP00t9lQLIFv"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    // const response = await fetch("http://localhost:1337/api/orders", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer c37c8f6ec109a97dd46dde3cec5a40678d799cbdcdf5449c3ac34bb053f360263571fb7a33a14a20afae4a8bf442497ca0d5727344d7bbaee9e00c762b69e3c01946c4eeb3c459e2b6bd273c44ce07ce410a59dc75f8771e6343ccc75adace6ec2e809d69e4badf55fce4670ed6411020456fb82e5294660daa81da771a806c5`
    //   },
    //   body: JSON.stringify(requestBody),
    // });
    // console.log(requestBody)

    // console.log("Done")
    // const session = await response.json();
    // await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // console.log(requestBody)

    const response = await fetch("https://starfish-app-ettw4.ondigitalocean.app/api/orders/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer b204f249f07d78414ad22f7dd5905342b2d6d9b817ab206cee92fff4b132ccc56aa986ce86e5b30d112dfbe665ce8db311985df76dc063490a07298ddfc293935791125ae8083854b14680d227bea733ba254eaca54389db92e82806fd2f9f1a8e0c549dc052008623e9892bd8fde082ac4995b512123ad8bc91ca84af6c8e6f`
          },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(requestBody)

  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="1rem" className="shop-button">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: "#041E42",
                    color: "white",
                    borderRadius: "5px",
                    minWidth: "50%",
                    padding: "20px 40px",
                    m: "20px 0",
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: "#D1683B",
                    color: "white",
                    borderRadius: "5px",
                    minWidth: "50%",
                    padding: "20px 40px",
                    m: "20px 0",
                    '&:hover': {
                      backgroundColor: '#BC4123',
                    },
                  }}
                >
                  {!isSecondStep ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;