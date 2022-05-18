import React from "react";
import Layout from "../../components/Layout/Layout";

const ResetSuccessPage = () => {
  return (
    <Layout>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Success!
            </h2>
            <div className="flex justify-center items-center">
              <div className="text-smr">
                <p className="font-medium text-indigo-600">
                  An email as been sent to reset your password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetSuccessPage;
