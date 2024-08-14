import React, { useEffect, useState } from 'react';
import { Container, Header, TitleMain, TextSimple} from './styleList'
import ItemList from '../../components/itemList'
// import { getTarefas,deleteTarefas,updateTarefaFeita } from '../../services/TarefaService';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';


export default function ListaTarefas() {

    interface Tarefa {
        id: number;
        nome_tarefa: string;
        descricao: string;
        data: string;
        feita: boolean;
      }

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const router = useRouter();
  const params = useLocalSearchParams(); // Para detectar mudanças nos parâmetros da rota, se aplicável
  
  async function handleDelete(id: number) {
    
  }

  async function handleCheck(id: number, checked: boolean) {
    
  }

  async function buscarDadosTarefas() {
    
  }

  useEffect(() => { 
    buscarDadosTarefas();
  }, [router,params]);
  
  return (
    <Container>
      <Header>
        <TitleMain>Agenda.IFRN</TitleMain>
        <TextSimple>Você tem {tarefas.length} Tarefas</TextSimple>
      </Header>
      <FlatList 
        data={tarefas} 
        renderItem={({ item }: ListRenderItemInfo<Tarefa>) => (
          <ItemList 
            id={item.id} 
            text={item.nome_tarefa} 
            checkedItem={item.feita}
            onCheck={handleCheck}
            onDelete={handleDelete} // Passa a função de deleção como prop
          />
        )}
        keyExtractor={(t) => t.id.toString()} 
      />
    </Container>
  );
}