/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Certification, CertificationInterface } from "../Certification";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_certification",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "certification",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCertification",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_certification",
        type: "string",
      },
    ],
    name: "setCertification",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000df638038062000df68339818101604052810190620000379190620001e3565b80600090816200004891906200047f565b505062000566565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000b9826200006e565b810181811067ffffffffffffffff82111715620000db57620000da6200007f565b5b80604052505050565b6000620000f062000050565b9050620000fe8282620000ae565b919050565b600067ffffffffffffffff8211156200012157620001206200007f565b5b6200012c826200006e565b9050602081019050919050565b60005b83811015620001595780820151818401526020810190506200013c565b60008484015250505050565b60006200017c620001768462000103565b620000e4565b9050828152602081018484840111156200019b576200019a62000069565b5b620001a884828562000139565b509392505050565b600082601f830112620001c857620001c762000064565b5b8151620001da84826020860162000165565b91505092915050565b600060208284031215620001fc57620001fb6200005a565b5b600082015167ffffffffffffffff8111156200021d576200021c6200005f565b5b6200022b84828501620001b0565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028757607f821691505b6020821081036200029d576200029c6200023f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003077fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002c8565b620003138683620002c8565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003606200035a62000354846200032b565b62000335565b6200032b565b9050919050565b6000819050919050565b6200037c836200033f565b620003946200038b8262000367565b848454620002d5565b825550505050565b600090565b620003ab6200039c565b620003b881848462000371565b505050565b5b81811015620003e057620003d4600082620003a1565b600181019050620003be565b5050565b601f8211156200042f57620003f981620002a3565b6200040484620002b8565b8101602085101562000414578190505b6200042c6200042385620002b8565b830182620003bd565b50505b505050565b600082821c905092915050565b6000620004546000198460080262000434565b1980831691505092915050565b60006200046f838362000441565b9150826002028217905092915050565b6200048a8262000234565b67ffffffffffffffff811115620004a657620004a56200007f565b5b620004b282546200026e565b620004bf828285620003e4565b600060209050601f831160018114620004f75760008415620004e2578287015190505b620004ee858262000461565b8655506200055e565b601f1984166200050786620002a3565b60005b8281101562000531578489015182556001820191506020850194506020810190506200050a565b868310156200055157848901516200054d601f89168262000441565b8355505b6001600288020188555050505b505050505050565b61088080620005766000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634efa938f14610046578063a56fa6d114610062578063b3f78be014610080575b600080fd5b610060600480360381019061005b9190610478565b61009e565b005b61006a610144565b6040516100779190610540565b60405180910390f35b6100886101d6565b6040516100959190610540565b60405180910390f35b80600090816100ad9190610778565b50610141600080546100be90610591565b80601f01602080910402602001604051908101604052809291908181526020018280546100ea90610591565b80156101375780601f1061010c57610100808354040283529160200191610137565b820191906000526020600020905b81548152906001019060200180831161011a57829003601f168201915b5050505050610264565b50565b60606000805461015390610591565b80601f016020809104026020016040519081016040528092919081815260200182805461017f90610591565b80156101cc5780601f106101a1576101008083540402835291602001916101cc565b820191906000526020600020905b8154815290600101906020018083116101af57829003601f168201915b5050505050905090565b600080546101e390610591565b80601f016020809104026020016040519081016040528092919081815260200182805461020f90610591565b801561025c5780601f106102315761010080835404028352916020019161025c565b820191906000526020600020905b81548152906001019060200180831161023f57829003601f168201915b505050505081565b6102fa816040516024016102789190610540565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102fd565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103858261033c565b810181811067ffffffffffffffff821117156103a4576103a361034d565b5b80604052505050565b60006103b761031e565b90506103c3828261037c565b919050565b600067ffffffffffffffff8211156103e3576103e261034d565b5b6103ec8261033c565b9050602081019050919050565b82818337600083830152505050565b600061041b610416846103c8565b6103ad565b90508281526020810184848401111561043757610436610337565b5b6104428482856103f9565b509392505050565b600082601f83011261045f5761045e610332565b5b813561046f848260208601610408565b91505092915050565b60006020828403121561048e5761048d610328565b5b600082013567ffffffffffffffff8111156104ac576104ab61032d565b5b6104b88482850161044a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104fb5780820151818401526020810190506104e0565b60008484015250505050565b6000610512826104c1565b61051c81856104cc565b935061052c8185602086016104dd565b6105358161033c565b840191505092915050565b6000602082019050818103600083015261055a8184610507565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806105a957607f821691505b6020821081036105bc576105bb610562565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105e7565b61062e86836105e7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061067561067061066b84610646565b610650565b610646565b9050919050565b6000819050919050565b61068f8361065a565b6106a361069b8261067c565b8484546105f4565b825550505050565b600090565b6106b86106ab565b6106c3818484610686565b505050565b5b818110156106e7576106dc6000826106b0565b6001810190506106c9565b5050565b601f82111561072c576106fd816105c2565b610706846105d7565b81016020851015610715578190505b610729610721856105d7565b8301826106c8565b50505b505050565b600082821c905092915050565b600061074f60001984600802610731565b1980831691505092915050565b6000610768838361073e565b9150826002028217905092915050565b610781826104c1565b67ffffffffffffffff81111561079a5761079961034d565b5b6107a48254610591565b6107af8282856106eb565b600060209050601f8311600181146107e257600084156107d0578287015190505b6107da858261075c565b865550610842565b601f1984166107f0866105c2565b60005b82811015610818578489015182556001820191506020850194506020810190506107f3565b868310156108355784890151610831601f89168261073e565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220b85321085250a843918827e1821c6367feec5d0f3243ce8ff08656301a032a5764736f6c63430008130033";

type CertificationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CertificationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Certification__factory extends ContractFactory {
  constructor(...args: CertificationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _certification: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_certification, overrides || {});
  }
  override deploy(
    _certification: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_certification, overrides || {}) as Promise<
      Certification & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Certification__factory {
    return super.connect(runner) as Certification__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CertificationInterface {
    return new Interface(_abi) as CertificationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Certification {
    return new Contract(address, _abi, runner) as unknown as Certification;
  }
}
