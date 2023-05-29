import { useState } from "react";
import { Text } from "@chakra-ui/react";

const CropText = ({ text }) => {
    const [showMore, setShowMore] = useState(false);
    const words = text.split(" ");

    const first100Words = words.slice(0, 20).join(" ");
    const remainingWords = words.slice(20).join(" ");

    return (
        <div>
            <Text>
                {showMore ? `${first100Words} ${remainingWords}` : first100Words}
            </Text>
            {words.length > 20 && (
                <button
                    onClick={() => setShowMore(!showMore)}
                    style={{
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        color: "blue",
                    }}
                >
                    {showMore ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
};



export default CropText;