import React, { useEffect, useState } from 'react';
import { Container, Header, TitleMain, TextSimple } from './styleList';
import ItemList from '../../components/itemList';
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

  useEffect(() => {
    // Função para buscar dados de tarefas simulada
    const buscarDadosTarefas = async () => {
      const tarefasIniciais: Tarefa[] = [
        { id: 1, nome_tarefa: 'Tarefa 1', descricao: 'Descrição da tarefa 1', data: '2021-10-10', feita: false },
        { id: 2, nome_tarefa: 'Tarefa 2', descricao: 'Descrição da tarefa 2', data: '2021-10-10', feita: true },
        { id: 3, nome_tarefa: 'Tarefa 3', descricao: 'Descrição da tarefa 3', data: '2021-10-10', feita: false },
      ];
      setTarefas(tarefasIniciais);
    };

    buscarDadosTarefas();
  }, []);

  const handleDelete = (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const handleCheck = (id: number, feita: boolean) => {
    setTarefas(prevTarefas => 
      prevTarefas.map(tarefa => 
        tarefa.id === id ? { ...tarefa, feita: !feita } : tarefa
      )
    );
  };

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
            onCheck={() => handleCheck(item.id, item.feita)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()} 
      />
    </Container>
  );
}
