<template>
    <div>
        <div>
            <b-modal id="modalleads" hide-footer title="Dados pessoais">
                <form>
                    <div class="form-group row">
                        <label for="inputNome" class="col-sm-2 col-form-label">Nome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputNome" placeholder="Nome">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                        </div>
                    </div>
                        <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Fone</label>
                        <div class="col-sm-10">
                            <input type="Fone" class="form-control" id="inputFone" placeholder="Fone" pattern="[7-9]{1}[0-9]{9}" required>
                        </div>
                    </div>
                        <fieldset class="form-group">
                        <div class="row">
                            
                            <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" >
                                <label class="form-check-label" for="gridRadios1">
                                Deseja receber promoções da Jacto
                                </label>
                            </div>
                        </div>
                    </div>
                    </fieldset>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </b-modal>
        </div>
        <nav class="container mt-4">
            <div class="row">
                <div class="col-9"></div>
                <div class="col-3">
                    <select name="" id="" class="custom-select" v-model="lang" @change="mudaIdioma($event)">
                        <option value="en_GB">English</option>
                        <option value="en_US">English American</option>
                        <option value="es_AR">Argentina</option>
                        <option value="es_ES">Español</option>
                        <option value="pt_BR">Português</option>
                        <option value="ru_RU">Russian</option>
                    </select>
                </div>
            </div>
        </nav> 
        <div class="banner">  
            <img class="logo-jacto" src="../assets/jacto.png" >
        </div>
        <div class="row">
            <input type="search" class="filtro form-control" @input="filtro = $event.target.value" placeholder="Filtre pela máquina desejada">
        </div>
        
        <div class="banner">
            <Carousel @proximo="proximo" @anterior="anterior">
                <CarouselSlide v-for="(i, index) of itensComFiltro" 
                    :key="i.id" 
                    
                    :index="index" 
                    :visivel = "visivel" 
                    :direcao="direcao"
                    >
                    <div @click="selecionaItem(i)">
                        <h2 >{{i.name[lang]}}</h2>
                        <div>
                            <img class="imagem-responsiva" :src="i.image.url" :alt="i.name[lang]">
                        </div> 
                    </div>
                </CarouselSlide>
            </Carousel>
        </div>
        
        <a href="https://wa.me/5514998110334?text=Oi!%20Vim%20do%20site%20e%20desejo%20receber%20atendimento" class="whatsappicon" target="_blank">
        <img src="https://cdn.awsli.com.br/1997/1997501/arquivos/whatsapp.svg" width="60" height="60" alt="Fale Conosco pelo WhatsApp">
        </a>
    
    </div>
  </template>
  <script>
     
  import Carousel from './banner/Carousel';
  import CarouselSlide from './banner/CarouselSlide';
  import ModalLeads from './ModalLeads';
   
  export default {
    components: {
        Carousel,
        CarouselSlide,
        ModalLeads
    },
    mounted(){
        this.listaItens()
    },
    data(){
        return{
            itens:[],
            item:{},
            filtro:'',
            visivel:0,
            direcao:'esquerda',
            lang:localStorage.getItem('lang') || 'en_GB'
        }
    },
    
    props: {
        msg: String
    },

    computed:{
        itensComFiltro(){
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.itens.filter(iten => exp.test(iten.name.en_GB));
            } else {
                return this.itens;
            }
        },
        tamanhoItens(){
            return this.itens.length;
        }
    },
    methods:{
        selecionaItem(item)
        {
            this.$bvModal.show('modalleads');
            this.item = item
            console.log(this.item.id)
        },
        proximo(){
            if(this.visivel >= this.tamanhoItens - 1){
                this.visivel = 0;
            }else{
                this.visivel++;
            }
            this.direcao="esquerda";
        },
        anterior(){
            if(this.visivel <= 0){
                this.visivel = this.tamanhoItens - 1;
            }else{
                this.visivel--;
            }
            this.direcao="direita";
        },
        mudaIdioma(event){
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
        listaItens(){
            this.$http.get('https://jacto.com/api/v1/products')
                .then(res =>{
                    this.itens = res.data;
                    console.log(this.itens)
                }).catch(console.error())
        }
    }
  }
  </script>
  
  
  <style scoped>
  .list-item{
      list-style: none;
  }
  .painel {
      padding: 0 auto;
      border: solid 1px grey;
      display: inline-block;
      margin: 5px;
      box-shadow: 5px 5px 10px grey;
      width: 400px;
      height: 100%;
      vertical-align: top;
      text-align: center;
      box-shadow: 5px 5px 5px;
  }
  
  .painel .painel-titulo {
      text-align: center;
      border: solid 2px;
      background: lightblue;
      margin: 0 0 15px 0;
      padding: 10px;
      text-transform: uppercase;
      box-shadow: 5px 5px 5px;
  }
  
  .div-banner {
      width:800px;
      height:500px;
  }
  
  .imagem-responsiva {
      width:100%;
      height:100%;
  }
  
  .filtro {
      width: 80%;
  }
  
  .whatsappicon{
      position:fixed;
      width:50px;
      height:50px;
      right: 5%;
      bottom: 5%;
      border-radius:50px;
      box-shadow: 1px 1px 2px #888;
      z-index:20;
  }
  
  .carousel-slider {
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
  }
  
  .banner{
      display:flex;
      justify-content: center;
  }
  
  .logo-jacto{
      width:20%;
      height: 20%;
  }
  </style>
  