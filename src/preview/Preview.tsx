import {Box, chakra} from "@chakra-ui/react";
import {Canvas as reaflowCanvas} from 'reaflow';
import React from "react";
import {toFlow} from "./to-flow";
import {testDBML} from "./dbml-data";
import {useSize} from "ahooks";

const Canvas = chakra(reaflowCanvas)

export default function Preview() {
    const wrapperBoxRef = React.useRef<HTMLDivElement>(null);
    const size = useSize(wrapperBoxRef);

    const {nodes, edges} = toFlow(testDBML);

    return <Box ref={wrapperBoxRef} pos={'absolute'} left={0} top={0} w={'100vw'} height={'100vh'}>
        <Canvas zoomable={true}
                fit={true}
                w={`${size ? size.width : 800}px`}
                h={`${size ? size.height : 800}px`}
                maxWidth={size ? size.width : 800}
                maxHeight={size ? size.height : 800}
                center={true}
                pannable={true}
                layoutOptions={{"elk.direction": "DOWN", 'elk.hierarchyHandling': 'INCLUDE_CHILDREN'}}
                direction="RIGHT"
                nodes={nodes}
                edges={edges}
        />
    </Box>
}
