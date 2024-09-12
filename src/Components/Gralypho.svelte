<div class="rect">
  <div class="rec-left">G</div>
  <h1>Gralypho</h1>
</div>

<style>
  .rect {
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 40px;
    font-family: poppins;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: -30px; 
  }
  .rect h1{
    font-size: 0.7em;
    color: var(--cta);
    margin-top: 2px;
  }

  .rect:hover{
        animation: bounce 0.4s ease-in-out;
  }
  .rec-left {
    width: 30%;
    height: 90%;
    color: var(--cta);
    font-size: 1.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    font-weight: 600;
    border-radius: 4px;
    border: solid 1px var(--cta);
    margin-top: -3px;
  }
  
    @keyframes bounce {
    0% {
      transform: scale(1) translateY(-2px);
    }
    25% {
      transform: scale(1) translateY(3px);
    }
    50% {
      transform: scale(1) translateY(-1px);
    }
    75% {
      transform: scale(1) translateY(2px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

</style>
