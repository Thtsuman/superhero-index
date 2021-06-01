import React from "react";
import Skeleton from "react-loading-skeleton";

const KeyValueDiv = (props) => {
  const { name, value, isLoading, multiple = false, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <div className="text-muted">{name}</div>
      {isLoading ? (
        <>
          {multiple ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <Skeleton />
          )}
        </>
      ) : (
        <>
          {value?.map((item, index) => (
            <div key={index} className="text-capitalize">
              {item}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default KeyValueDiv;
