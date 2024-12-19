import React from "react";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

const AlertBasic = ({ ...props }: any) => {
  return (
    <Alert {...props} className="w-fit">
      <AlertIcon as={InfoIcon} />
      <AlertText className="text-2xs">Selection successfully moved!</AlertText>
    </Alert>
  );
};

export default AlertBasic;
