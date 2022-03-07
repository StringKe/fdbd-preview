import { ElkNodeLayoutOptions, NodeData } from 'reaflow';
import { EdgeData } from 'reaflow/dist/types';
import { RawDatabase } from '@dbml/core/types/model_structure/database';
import { Token } from '@dbml/core/types/model_structure/element';

export declare type InlineRefs = InlineRef[];

export interface InlineRef {
  fieldNames: string[];
  relation: string;
  tableName: string;
  token: Token;
}

function getDefaultNode(type: 'table' | 'enum', name: string): NodeData {
  return {
    data: {
      type,
    }, id: name, disabled: true,
  };
}

function findTableByKey(dbml: RawDatabase, type: 'alias' | 'name') {
  return (value: string) => {
    return dbml.tables.find((i) => i.alias === value);
  };
}

export function toFlow(dbml: RawDatabase): {
  nodes: NodeData[]; edges: EdgeData[];
} {
  const result: {
    nodes: NodeData[]; edges: EdgeData[];
  } = {
    nodes: [], edges: [],
  };

  const getTableByAlias = findTableByKey(dbml, 'alias');
  const getTableByName = findTableByKey(dbml, 'name');

  const defaultLayoutOptions: ElkNodeLayoutOptions = {
    'elk.padding': '[left=24, top=24, right=24, bottom=24]', portConstraints: 'FIXED_RATIO',
  };

  result.nodes.push({
    id: 'project', text: dbml.project.name, disabled: true, data: {
      type: 'project',
    }, layoutOptions: defaultLayoutOptions,
  });

  dbml.tables.forEach((item) => {
    result.nodes.push({
      id: item.name, text: item.name, // parent: 'project',
      data: {
        type: 'table',
      }, width: 300, height: 600, layoutOptions: defaultLayoutOptions,
    });
    item.fields.forEach((field) => {
      result.nodes.push({
        id: `${item.name}_${field.name}`, text: field.name, parent: item.name, width: 100, height: 30, data: {
          type: 'column',
        }, layoutOptions: defaultLayoutOptions,
      });
    });
  });

  dbml.enums.forEach((value) => {
    result.nodes.push({
      id: value.name, data: {
        type: 'enum',
      }, layoutOptions: defaultLayoutOptions,
    });
  });

  dbml.refs.forEach((ref, index) => {
    const [from, to] = ref.endpoints;
    const fromFieldName = from.fieldNames[0];
    const fromTableName = getTableByAlias(from.tableName)?.name;
    const fromNodeName = fromTableName ?? from.tableName;
    const fromName = `${fromNodeName}_${fromFieldName}`;

    const toFieldName = to.fieldNames[0];
    const toTableName = getTableByAlias(to.tableName)?.name;
    const toNodeName = toTableName ?? to.tableName;
    const toName = `${toNodeName}_${toFieldName}`;

    result.edges.push({
      id: `${fromName}.${toName}`, from: fromName, to: toName,
    });
  });

  console.log(result);

  return result;
}
